function gcd(a, b) {
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

gcd(15, 5);
gcd(2154, 458);