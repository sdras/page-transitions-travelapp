import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class TravelApp {

    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Welcome to the Travel App!");
        System.out.println("Available Destinations:");
        System.out.println("1. Paris");
        System.out.println("2. New York");
        System.out.println("3. Tokyo");

        try {
            System.out.print("Enter the number of your destination: ");
            int choice = Integer.parseInt(reader.readLine());

            String destination = "";
            switch (choice) {
                case 1:
                    destination = "Paris";
                    break;
                case 2:
                    destination = "New York";
                    break;
                case 3:
                    destination = "Tokyo";
                    break;
                default:
                    System.out.println("Invalid choice. Exiting.");
                    return;
            }

            System.out.println("Great choice! You selected " + destination);

            System.out.print("Do you prefer sightseeing or food? ");
            String preference = reader.readLine();

            if ("sightseeing".equalsIgnoreCase(preference)) {
                System.out.println("Here are some popular sightseeing spots in " + destination + ":");
                displaySightseeingSpots(destination);
            } else if ("food".equalsIgnoreCase(preference)) {
                System.out.println("Here are some popular restaurants in " + destination + ":");
                displayRestaurants(destination);
            } else {
                System.out.println("Invalid preference. Exiting.");
            }
        } catch (IOException | NumberFormatException e) {
            System.out.println("Error reading input. Exiting.");
        }
    }

    private static void displaySightseeingSpots(String destination) {
        if ("Paris".equalsIgnoreCase(destination)) {
            System.out.println("1. Eiffel Tower");
            System.out.println("2. Louvre Museum");
        } else if ("New York".equalsIgnoreCase(destination)) {
            System.out.println("1. Statue of Liberty");
            System.out.println("2. Central Park");
        } else if ("Tokyo".equalsIgnoreCase(destination)) {
            System.out.println("1. Tokyo Tower");
            System.out.println("2. Senso-ji Temple");
        } else {
            System.out.println("Invalid destination.");
        }
    }

    private static void displayRestaurants(String destination) {
        if ("Paris".equalsIgnoreCase(destination)) {
            System.out.println("1. Le Jules Verne");
            System.out.println("2. Chez L'Ami Jean");
        } else if ("New York".equalsIgnoreCase(destination)) {
            System.out.println("1. Le Bernardin");
            System.out.println("2. Per Se");
        } else if ("Tokyo".equalsIgnoreCase(destination)) {
            System.out.println("1. Sukiyabashi Jiro");
            System.out.println("2. Ryugin");
        } else {
            System.out.println("Invalid destination.");
        }
    }
}
