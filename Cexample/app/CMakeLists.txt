cmake_minimum_required(VERSION 3.10)
project(HelloWorldApp)

add_executable(HelloWorldApp main.c)
target_link_libraries(HelloWorldApp PRIVATE helloworld)

# Specify the output directory for the executable
set_target_properties(HelloWorldApp PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})

