/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Punteros para nums1, nums2 y el final del arreglo combinado
    let i = m - 1; // Último elemento válido de nums1
    let j = n - 1; // Último elemento de nums2
    let k = m + n - 1; // Última posición en nums1

    // Comparamos desde el final hacia el inicio
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // Copiamos el mayor
            i--;
        } else {
            nums1[k] = nums2[j]; // Copiamos el mayor
            j--;
        }
        k--; // Movemos el puntero del resultado
    }

    // Si quedan elementos en nums2, los copiamos a nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};