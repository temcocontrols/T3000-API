---
title: Project Overview
---

# Project Overview

T3000 API,This is the API for interacting with the building database, you will need to install it to run and use the [T3000 web client](https://github.com/temcocontrols/T3000_Client). 

The API by itself does not have any functionality, but it serves as a platform to run the web-based T3000 client. In other words, the API is utilized as a foundation for the T3000 client to perform its operations. The T3000 client leverages the API's framework to access the necessary resources and execute the functions required to achieve the intended goals. Thus, the API is a crucial component in the overall architecture of the T3000 client system.

[https://github.com/temcocontrols/T3000_Client](https://github.com/temcocontrols/T3000_Client)


## Important notes

At the moment, the ongoing work does not involve any integration with the Bacnet stack or implementation of any T3000-specific functionality. However, we are working on incorporating more functions into the project as we move forward.

## How it works

The API should be installed on a Rasbperry Pi ( or any other computer ) and this computer will be connected to the controllers via a local network so the client will be able to interact with the controllers by reading/writing to the API. 

In order for a client to read and write to the system, the first step is .to install this API on a computer in your system network, in the next section you will see how you can install the API.
