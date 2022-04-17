let n=gets(0)

for(sum = 0; n > 0;
        sum += n % 10,
        n = parseInt(n / 10))
        ;
    print(sum);



