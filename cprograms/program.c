#include <unistd.h>
#include <stdio.h>

void  password(char senha[])
{
    write(1, &senha[1], 1);
}


int   main()
{
  printf("Hello, give me your pass");
  char pass[50];

  scanf("%s", &pass);




  password(pass);
}