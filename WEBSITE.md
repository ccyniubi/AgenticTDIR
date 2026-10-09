# AgenticTDIR project website

The English project page lives in `docs/`. It is a static website with no build step, package installation, API keys, or server-side inference.

## Preview

From this repository, run `python -m http.server 4173 --bind 127.0.0.1 --directory docs` and open http://127.0.0.1:4173/.

## Publish with GitHub Pages

Push the website files to GitHub, then select **Settings → Pages → Deploy from a branch → main → /docs → Save**. All asset paths are relative, so the page works at the repository subpath `/AgenticTDIR/`.

## Update the page

- `docs/index.html`: title, authors, affiliations, descriptions, external links, and sections.
- `docs/styles.css`: presentation and responsive layouts.
- `docs/app.js`: comparison sliders, task defaults, video language, and figure zoom.
- `docs/assets/data.js`: the 23 exported examples.
- `docs/assets/figures/`: optimized figures from the current manuscript source archive.
- `docs/assets/videos/`: English and Chinese compressed demonstration videos.

The source material is the main/supplementary manuscript and TPAMI source archive in the supplied `linshi` folder, dated 2026-10-09, and the supplied video-production assets. The experiments section presents the main qualitative comparison, real-world cases, task-discriminative evidence, cross-backbone policy transfer, and component ablations, in that order. Each study uses its original manuscript figure with a short explanation of its purpose and findings. There is no benchmark table or numerical-results selector. Recorded examples were exported in July 2026. Their model confidences are not presented as accuracy or benchmark metrics. Only the named dataset and visual observations are used for example labels; detailed degradation compositions are not inferred from appearance.

The two real-world figures use the latest source archive rather than the older video asset copies. All source files remain unchanged. Embedded videos use the user's supplied final delivery files. Video presentation frames and narration predate the current manuscript and have not been revised here.

The public paper URL and author profile URLs have not been supplied. The page does not expose either local manuscript PDF, invent an arXiv identifier, or imply acceptance. Add paper/download/citation links once the intended public version is available.

The visual direction references the user-selected UniMPA project page (https://jiutian-vl.github.io/UniMPA-page/). The implementation and AgenticTDIR content are authored for this repository.
