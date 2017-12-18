/**
 * Girilen değerin alfabetik olup olmadigini kontrol eder.
 */
exports.isAlpha = function(value) {
  var sonuc = /^[A-Za-z_ğüşıöçĞÜŞİÖÇ\s-]+$/.test(value);
  return sonuc;
}