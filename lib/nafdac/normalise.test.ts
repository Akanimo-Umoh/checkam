import { describe, expect, it } from "vitest"
import { decodeEntities, displayName, normaliseNafdac } from "./normalise"

describe("normaliseNafdac", () => {
  it("keeps a clean number as it is", () => {
    expect(normaliseNafdac("04-7953")).toBe("04-7953")
  })

  it("removes stray spaces (118 Greenbook numbers have them)", () => {
    expect(normaliseNafdac(" 04 - 7953 ")).toBe("04-7953")
    expect(normaliseNafdac("A4-1234\t")).toBe("A4-1234")
  })

  it("uppercases letters so a4 and A4 match", () => {
    expect(normaliseNafdac("a4-1234")).toBe("A4-1234")
  })

  it("turns phone-keyboard dashes into a normal hyphen", () => {
    expect(normaliseNafdac("04–7953")).toBe("04-7953") // en dash
    expect(normaliseNafdac("04—7953")).toBe("04-7953") // em dash
    expect(normaliseNafdac("04−7953")).toBe("04-7953") // minus sign
  })

  it("makes two differently-typed versions of one number equal", () => {
    expect(normaliseNafdac("b4 – 0123")).toBe(normaliseNafdac("B4-0123"))
  })
})

describe("decodeEntities", () => {
  it("decodes &amp; in maker names", () => {
    expect(decodeEntities("Johnson &amp; Johnson")).toBe("Johnson & Johnson")
  })

  it("leaves unknown entities alone", () => {
    expect(decodeEntities("A &copy; B")).toBe("A &copy; B")
  })
})

describe("displayName", () => {
  it("hides NAFDAC staff marks # and *, like their site does", () => {
    expect(displayName("#Tingle Me Balm")).toBe("Tingle Me Balm")
    expect(displayName("Paracetamol 500mg*")).toBe("Paracetamol 500mg")
  })

  it("keeps _ and $ marks, because NAFDAC's site shows them", () => {
    expect(displayName("Emgyl Suspension_")).toBe("Emgyl Suspension_")
  })

  it("decodes entities and collapses spaces", () => {
    expect(displayName("  Vitamin  C &amp; Zinc  ")).toBe("Vitamin C & Zinc")
  })
})
