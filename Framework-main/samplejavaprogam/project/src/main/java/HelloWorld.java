/**
 * Project Name    : sonarqube-example
 * Developer       : Osanda Deshan
 * Version         : 1.0.0
 * Date            : 8/8/2019
 * Time            : 4:28 PM
 * Description     :
 **/


public class HelloWorld {

    public static void sayHello() {
        System.out.println("Hello World!");
    }

    public static void notCovered() {
        System.out.println("This method is not covered by unit tests");
    }
    
    public static void main(String args[]){  
     System.out.println("Hello Java");  
         sayHello();
         notCovered();
    }  


}
