import { matemaatilisedArvutused } from "../main.js";

test('matemaatilisedArvutused peaks andma õige summa', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.summa).toBe(15);
});

test('matemaatilisedArvutused peaks andma õige vahe', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.vahe).toBe(5);
});

test('matemaatilisedArvutused peaks andma õige jagatise', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.jagatis).toBe(2);
});

test('matemaatilisedArvutused peaks andma õige korrutise', () => {
    const result = matemaatilisedArvutused(10, 5);
    expect(result.korrutis).toBe(100);
});