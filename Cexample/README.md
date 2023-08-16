# C library example

## How to build on Linux ( And it can be built on Windows too )

* Make sure you have Cmake and git installed

* Clone the repository and run the build

Open the terminal and do the following

```
git clone https://github.com/temcocontrols/T3000-API.git

cd T3000-API

cd Cexample

mkdir build

cd build

cmake ..

cmake --build .

```

You will get two files as a result, one file for the hello world library and another for the executable that will use the library to print Hello world

`HelloWorldApp` and `libhelloworld.so`

You can execute the `HelloWorldApp` like this in terminal

`./HelloWorldApp`

If you see "Hello, world!" then everything is working fine.