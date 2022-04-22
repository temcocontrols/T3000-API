#include <napi.h>
#include <string>
#include "T3000Interpretor/dllmain.h"

/* Napi::String greetHello(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    std::string user = (std::string)info[0].ToString();
    std::string result = helloUser(user);

    return Napi::String::New(env, result);
}

// callback eethod when module is registered with Hode.js
Napi::Object Init(Napi::Env env, Napi::Object exports)
{

    exports.Set(
        Napi::String::New(env, "greetHello"),
        Napi::Function::New(env, greetHello));
    return exports;
}

NODE_API_MODULE(greet, Init) */

Napi::Number encode_program(const Napi::CallbackInfo &info)
{
    Napi::Env env = info.Env();

    std::string code = info[0].ToString();
    encode_str * result = Encode_function((char*)code.c_str());

    return Napi::Number::New(env, result->errorcode);
}

// callback eethod when module is registered with Hode.js
Napi::Object Init(Napi::Env env, Napi::Object exports)
{

    exports.Set(
        Napi::String::New(env, "encode_program"),
        Napi::Function::New(env, encode_program));
    return exports;
}

NODE_API_MODULE(encode_program, Init)