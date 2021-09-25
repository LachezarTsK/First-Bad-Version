
 /*
The code definition for Java requires class Solution to extend class VersionControl.
 */
public class Solution extends VersionControl {

    int totalVersions = 2126753390;//sample input.
    int version = 1702766719;//sample input.

    /*
      'isBadVersion' API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); 
     */
    public int firstBadVersion(int totalVersions) {

        super.badVersion = version;
        int lowerBoundary = 1;
        int upperBoundary = totalVersions;

        while (lowerBoundary <= upperBoundary) {

            int mid = lowerBoundary + (upperBoundary - lowerBoundary) / 2;

            if (isBadVersion(mid)) {
                upperBoundary = mid - 1;
            } else {
                lowerBoundary = mid + 1;
            }
        }
        return lowerBoundary;
    }
}
