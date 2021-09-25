
var totalVersions = 2126753390;//Sample input.
var badVersion = 1702766719;//Sample input.

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion = function (version) {
    return version >= badVersion;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {

    /**
     * @param {integer} totalVersions
     * @return {integer} The first bad version
     */
    return function (totalVersions) {

        let lowerBoundary = 1;
        let upperBoundary = totalVersions;

        while (lowerBoundary <= upperBoundary) {

            let mid = Math.floor(lowerBoundary + (upperBoundary - lowerBoundary) / 2);
            if (isBadVersion(mid)) {
                upperBoundary = mid - 1;
            } else {
                lowerBoundary = mid + 1;
            }
        }
        return lowerBoundary;
    };
};
