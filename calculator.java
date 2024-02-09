import java.util.*;

public class calculator {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        int n1, n2, sum, diff, prod, q, r;
        System.out.println("Enter 2 numbers");
        n1 = obj.nextInt();
        n2 = obj.nextInt();
        System.out.println(
                "Enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division, 5 for remainder");
        int ch = obj.nextInt();
        switch (ch) {
            case 1:
                sum = n1 + n2;
                System.out.println("Sum=" + sum);
                break;
            case 2:
                diff = n1 - n2;
                System.out.println("Difference=" + diff);
                break;
            case 3:
                prod = n1 * n2;
                System.out.println("Product=" + prod);
                break;
            case 4:
                q = n1 / n2;
                System.out.println("Quotient=" + q);
                break;
            case 5:
                r = n1 % n2;
                System.out.println("Remainder=" + r);
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}
