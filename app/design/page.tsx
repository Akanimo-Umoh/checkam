import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const typeScale = [
  {
    cls: "font-heading text-display-lg",
    name: "Display L",
    sample: "Snap a medicine. See if it's registered.",
  },
  {
    cls: "font-heading text-display-md",
    name: "Display M",
    sample: "Registration record matched",
  },
  {
    cls: "font-heading text-display-sm",
    name: "Display S",
    sample: "Snap the pack",
  },
  { cls: "text-title", name: "Title", sample: "Paracetamol 500 mg Tablets" },
  {
    cls: "text-body text-ink-2",
    name: "Body",
    sample: "The details on the pack match the official NAFDAC record.",
  },
  {
    cls: "text-body-sm text-ink-2",
    name: "Body S",
    sample: "Still check the packaging, batch number and expiry date.",
  },
  { cls: "text-label", name: "Label", sample: "Amoxicillin 500 mg Capsules" },
  { cls: "text-label-sm", name: "Label S", sample: "NAFDAC Reg. No." },
  {
    cls: "text-meta text-muted-foreground",
    name: "Meta",
    sample: "Tablet • Sample Pharma Ltd • 04-0000",
  },
  { cls: "text-small", name: "Small", sample: "Sample data" },
  {
    cls: "text-overline uppercase text-matched",
    name: "Overline",
    sample: "Matched",
  },
]

const results = [
  { name: "Matched", fg: "text-matched", bg: "bg-matched-soft" },
  { name: "Unmatched", fg: "text-unmatched", bg: "bg-unmatched-soft" },
  { name: "Unverified", fg: "text-unverified", bg: "bg-unverified-soft" },
  { name: "Official alert", fg: "text-alert", bg: "bg-alert-soft" },
]

export default function DesignPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-10 p-6">
      <h1 className="font-heading text-display-lg">CheckAm design check</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-overline text-muted-foreground uppercase">
          Type scale
        </h2>
        {typeScale.map((t) => (
          <div key={t.name} className="flex flex-col gap-1 border-b pb-4">
            <span className="text-meta text-muted-foreground">{t.name}</span>
            <span className={t.cls}>{t.sample}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-overline text-muted-foreground uppercase">
          Results
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {results.map((r) => (
            <div key={r.name} className={`rounded-xl p-4 ${r.bg}`}>
              <span className={`text-overline uppercase ${r.fg}`}>
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-overline text-muted-foreground uppercase">
          Buttons
        </h2>
        <Button variant="outline" size="icon" aria-label="Back">
          <ArrowLeft />
        </Button>
        <Button>Check this medicine</Button>
        <Button variant="outline">Type the number instead</Button>
        <Button variant="ghost" size="sm">
          Not now
        </Button>
        <p className="text-meta text-muted-foreground tabular-nums">
          NAFDAC 04-7953 • Batch AX0877
        </p>
      </section>
    </main>
  )
}
