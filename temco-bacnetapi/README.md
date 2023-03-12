# Build Process for BACnet bins

1. git clone

    * `git clone git@github.com:temcocontrols/T3000-API.git t3000_api_test`

2. Jump to MHassan branch:

    * `cd t3000_api_test`
    * `git checkout MHassan`

3. Now, to build the bacnet part, we do make:

    * `make`
    * This will do all the compilation and generate the bacnet_discovery binary in bin directory

4. To run it:

    * `./bin/bacnet_discovery`

5. it should show the devices, if it doesn't show the list configure the interface for it

    * do: `ifconfig`
    * and get the interface name, in my case it is eno1
    * `export BACNET_IFACE=eno1`

6. run the binary again

    * `./bin/bacnet_discovery`


![git clone](docs/images/step1_git_clone.png)
![git checkout](docs/images/step2_git_checkout.png)
![make](docs/images/step3_make.png)
![make](docs/images/step3_make_output.png)
![run the binary](docs/images/step4_running_bin.png)
![get interface](docs/images/step5_get_interface.png)
![export interface](docs/images/step5_export_interface.png)
![final output](docs/images/step5_final_output.png)