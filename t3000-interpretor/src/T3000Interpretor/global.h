#pragma once

#define BAC_BI        20
#define BAC_BV        21

typedef struct
{
	int n_option;  // 0 = NULL    1 = panel           2 = instance;
	struct
	{
		unsigned char main_panel;
		unsigned char sub_panel;
		unsigned char ntype;
		unsigned int object_number;
		unsigned char network; //原有结构;
	}pan_str;
	struct
	{
		unsigned int device_instance;
		unsigned char ntype;
		unsigned int object_number;
	}ins_str;
}Str_points;

#define BAC_MAX       36
#define BAC_MAIN      255

#define MAX_FUNCTION_COUNT    BAC_MAX  

#define BAC_FLOAT_ABCD  32
#define BAC_FLOAT_CDAB  33
#define BAC_FLOAT_BADC  34
#define BAC_FLOAT_DCBA  35

#define BAC_VAR 		 2
#define BAC_OUT 		 0
#define BAC_IN  		 1

const int BAC_INPUT_ITEM_COUNT = 64;	//sizeof(Str_in_point);					//46
const int BAC_OUTPUT_ITEM_COUNT = 64;	//sizeof(Str_out_point);					//45
const int BAC_VARIABLE_ITEM_COUNT = 128; // sizeof(Str_variable_point);			//39
const int BAC_PROGRAM_ITEM_COUNT = 16;	//sizeof(Str_program_point);				//37
const int BAC_PROGRAMCODE_ITEM_COUNT = 16;

const int BAC_PID_COUNT = 16;
const int BAC_SCREEN_COUNT = 16;
const int BAC_SCHEDULE_COUNT = 8;
const int BAC_HOLIDAY_COUNT = 4;

const int TYPE_INPUT = 1;
const int TYPE_OUTPUT = 2;

const int TYPE_PROGRAM = 3;

const int TYPE_ALL = 255;
const int TYPE_VARIABLE = 4;
const int TYPE_WEEKLY = 5;
const int TYPE_ANNUAL = 6;
const int TYPE_CONTROLLER = 8;
const int TYPE_SCREENS = 9;
const int TYPE_MONITOR = 10;
