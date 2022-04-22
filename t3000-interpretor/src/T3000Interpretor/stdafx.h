// stdafx.h : ��׼ϵͳ�����ļ��İ����ļ���
// ���Ǿ���ʹ�õ��������ĵ�
// �ض�����Ŀ�İ����ļ�
//

#pragma once

#include <stdio.h>


#define WIN32_LEAN_AND_MEAN             // �� Windows ͷ���ų�����ʹ�õ�����
// Windows ͷ�ļ�: 
//#include <windows.h>


#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS      // some CString constructors will be explicit


// #include <afxwin.h>         // MFC core and standard components
#ifdef _WIN32
#include <afxext.h>
#else
#include <unistd.h>
#endif       // MFC extensions
//// TODO:  �ڴ˴����ó�����Ҫ������ͷ�ļ�

