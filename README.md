# satellites/design-system/

Single source of truth for `codychampion/design-system` — the public design-system repo.

## Edit here

```bash
cd ~/nox-code/satellites/design-system
# Edit whatever needs editing within this directory ONLY
git add -p
git commit -m "satellites/design-system: <what>"
git push origin main
```

The push to monorepo `main` triggers `.github/workflows/design-system-mirror.yml`, which:
1. Subtree-splits `satellites/design-system/**` into a clean design-only branch
2. Force-pushes that branch to `codychampion/design-system` `main` using `SATELLITES_MIRROR_PAT`

## DO NOT

- Add `codychampion/design-system` as a local git remote. The PAT lives only in GitHub Actions.
- Push to `codychampion/design-system` manually. The Action is the only authorized publisher.
- Edit files outside `satellites/design-system/` while expecting them to reach the public mirror. The safety filter blocks this.

## Recovery if public mirror is broken

Force-push the public `main` back by re-running the Action against an earlier monorepo SHA, or by manually rolling back at codychampion/design-system.
