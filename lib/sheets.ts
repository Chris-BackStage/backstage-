import { google } from "googleapis"

const BUDGET_LABELS: Record<string, string> = {
  "under-5k": "Under $5,000",
  "5k-15k": "$5,000 – $15,000",
  "15k-50k": "$15,000 – $50,000",
  "50k-plus": "$50,000+",
  unsure: "Not sure yet",
}

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "1-month": "Within 1 month",
  "1-3-months": "1–3 months",
  exploring: "Just exploring",
}

export async function appendLeadToSheet(row: {
  name: string
  email: string
  company: string
  useCase: string
  budget: string
  timeline: string
}) {
  const sheetId = process.env.GOOGLE_SHEET_ID
  const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")

  if (!sheetId || !serviceEmail || !privateKey) {
    console.warn("[sheets] Env vars not set — skipping Google Sheets append")
    return
  }

  const auth = new google.auth.JWT({
    email: serviceEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })

  const sheets = google.sheets({ version: "v4", auth })

  const timestamp = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Leads!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          timestamp,
          row.name,
          row.email,
          row.company,
          row.useCase,
          BUDGET_LABELS[row.budget] ?? row.budget,
          TIMELINE_LABELS[row.timeline] ?? row.timeline,
        ],
      ],
    },
  })
}
