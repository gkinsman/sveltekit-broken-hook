# This repo demonstrates that sveltekit hooks don't forward errors correctly.

The error passed to a handleError hook is always empty object:

https://github.com/gkinsman/sveltekit-broken-hook/blob/44d0f03d3f694b52091c080d35256701408d410e/src/hooks.server.ts#L6

Can you find _anything_ that fills the error object here?

https://github.com/gkinsman/sveltekit-broken-hook/blob/44d0f03d3f694b52091c080d35256701408d410e/src/routes/%2Bpage.server.ts#L4
