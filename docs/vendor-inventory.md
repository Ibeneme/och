# Third-party vendor inventory (J3)

| Vendor | Used for | Where | Domains to allow (script / frame) | Cookies / storage |
|---|---|---|---|---|
| Jotform (HIPAA account) | Request Care form (id 262855342857165) | /request-care, /contact, every /home-health-care/<city> page | `form.jotform.com` (frame), `cdn.jotfor.ms` (script) | To be confirmed from a live browser session before launch |
| Jotform (HIPAA account) | Refer a Patient form (id 262856103710149) | /referrals | `form.jotform.com` (frame), `cdn.jotfor.ms` (script) | To be confirmed from a live browser session before launch |
| LeadConnector / HighLevel | Careers - CNA/HHA Application (EN), form id CVmf48hEsjtgJ7Wim2tX | /careers/cna-home-health-aide-application | `api.leadconnectorhq.com` (frame), `link.msgsndr.com` (script) | Embed sets `data-cookie-consent="true"`, provider "auto". Exact cookie names to be confirmed from a live browser session before launch |
| HHAeXchange | EVV guide links (outbound only, not embedded) | /employee-resources/evv | `knowledge.hhaexchange.com`, `hhaxsupport.s3.amazonaws.com` | None (links only) |
| Vimeo | EVV training video (outbound link only, not embedded) | /employee-resources/evv | `vimeo.com` | None (link only) |

## Content-Security-Policy
The site currently sends no CSP header. If one is added, allow at least:

- `script-src`: `https://link.msgsndr.com https://cdn.jotfor.ms`
- `frame-src`: `https://api.leadconnectorhq.com https://form.jotform.com`
- `connect-src` / `img-src` / `style-src`: whatever the vendors request, checked in the browser console after enabling.
