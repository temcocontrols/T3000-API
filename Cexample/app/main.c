#include <stdio.h>
#include "helloworld.h"

int main() {
    const char* message = get_hello_message();
    printf("%s\n", message);
    return 0;
}

