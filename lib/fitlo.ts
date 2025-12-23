const FITLO_API_URL = "https://fitlo.ai/api/gym-website/contact";

export async function sendLeadToFitlo(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  const apiKey = process.env.GYM_WEBSITE_API_KEY;
  const orgId = process.env.NEXT_PUBLIC_ORG_ID;

  if (!apiKey || !orgId) {
    console.log("📊 [Fitlo] Skipping (missing API key or org ID)");
    return;
  }

  const res = await fetch(FITLO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      orgId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      source: "website",
    }),
  });

  if (res.ok) {
    console.log("📊 [Fitlo] Lead sent successfully");
  } else {
    console.error("📊 [Fitlo] Failed to send lead:", res.status);
  }
}
