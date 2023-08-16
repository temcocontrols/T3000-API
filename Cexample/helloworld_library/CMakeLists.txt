add_library(helloworld SHARED helloworld.c)
target_include_directories(helloworld PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})

# Specify the output directory for the library
set_target_properties(helloworld PROPERTIES LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR})

