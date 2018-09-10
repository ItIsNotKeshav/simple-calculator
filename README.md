import java.util.*;
public class calculator
{
    public static void main(String[] args)
    {
     Scanner obj= new Scanner(System.in);
     int n1, n2, sum, diff, prod, q, r;
     System.out.println("Enter 2 numbers");
     n1=obj.nextInt();
     n2=obj.nextInt();
     sum=n1=n2;
     diff=n1-n2;
     prod=n1*n1;
     q=n1/n2;
     r=n1%n2;
     System.out.println("Sum="+sum);
     System.out.println("Difference="+diff);
     System.out.println("Product="+prod);
     System.out.println("Quotient="+q);
     System.out.println("Remainder="+r);
    }
}

