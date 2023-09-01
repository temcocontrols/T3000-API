#!/bin/bash

# Function to display messages in green color
green_echo() {
    echo -e "\e[32m$1\e[0m"
}

# Function to generate a random password
generate_random_password() {
    tr -dc A-Za-z0-9 </dev/urandom | head -c 15 ; echo ''
}

# Function to generate a random password
generate_random_key() {
    tr -dc A-Za-z0-9 </dev/urandom | head -c 30 ; echo ''
}

# Function to prompt for input with a given prompt message and default value
prompt_input() {
    read -p "$1 [$2]: " input
    input="${input:-$2}"  # Use the default value if no input is provided
    echo "$input"
}

# Function to check if the OS is Ubuntu or Debian
check_os() {
    if [ -f /etc/os-release ]; then
        source /etc/os-release
        if [[ $ID == "ubuntu" || $ID == "debian" ]]; then
            return 0  # OS is Ubuntu or Debian
        fi
    fi
    return 1  # OS is not Ubuntu or Debian
}

# Check the OS
if check_os; then
    green_echo "This script is designed to work on Debian-based distributions (Ubuntu/Debian)."
else
    green_echo "Warning: This script is intended for use on Debian-based distributions only."
    read -p "Do you want to continue anyway? (y/n): " choice
    if [[ $choice == "y" || $choice == "Y" ]]; then
        echo "Continuing with the script..."
    else
        echo "Exiting the script."
        exit 1
    fi
fi

# Generate a random password for the role
role_password=$(generate_random_password)

# Generate a random key for the access key
access_key=$(generate_random_key)

# Update and install necessary packages
green_echo "Updating package list and installing Git and Curl..."
sudo apt update -y
sudo apt install curl git -y

# Install Node.js 
green_echo "Installing Node.js 20.x..."
cd ~
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg -y
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt install nodejs -y
node -v

# Install PostgreSQL and create a role and database
green_echo "Installing PostgreSQL and configuring the database..."
sudo apt install postgresql postgresql-contrib -y
sudo systemctl start postgresql.service

# Create a role and database
sudo -i -u postgres <<EOF
psql -c "DROP DATABASE IF EXISTS t3_api;"
psql -c "REASSIGN OWNED BY t3000 TO postgres;"
psql -c "DROP OWNED BY t3000;"
psql -c "REVOKE CONNECT ON DATABASE t3_api FROM t3000"
psql -c "DROP USER t3000;"
psql -c "CREATE DATABASE t3_api;"
psql -c "CREATE ROLE t3000 WITH LOGIN NOSUPERUSER INHERIT CREATEDB NOCREATEROLE NOREPLICATION PASSWORD '$role_password';"
psql -c "GRANT CONNECT ON DATABASE t3_api TO t3000;"
psql -c "GRANT ALL PRIVILEGES ON DATABASE t3_api TO t3000;"
EOF

# Clone and build the API
green_echo "Cloning and building the API..."
cd ~
git clone https://github.com/temcocontrols/T3000-API.git
cd T3000-API
git stash
git pull
npm install
npm run build

# Create and fill the .env file
green_echo "Creating and configuring the .env file..."
echo "ACCESS_KEY=$access_key" > .env
echo "DATABASE_URL=postgres://t3000:$role_password@localhost:5432/t3_api" >> .env

# Create API tables in the database
green_echo "Creating API tables in the database..."
npm run prisma:db-push

green_echo "Installation complete. You can now start using the API by running the following."
green_echo "npm start"
