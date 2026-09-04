# This workstation has almost no free space on C:. Source remains in Git on C:.
# The F: copy is disposable runtime output, never a second source of truth.
$sourceRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$runtimeRoot = 'F:\TenderCare Irrigation\.build\preview'
if (-not (Test-Path -LiteralPath $runtimeRoot)) { New-Item -ItemType Directory -Path $runtimeRoot -Force | Out-Null }
foreach ($directory in @('src','public','tests','docs','scripts')) {
  $sourceDirectory = Join-Path $sourceRoot $directory
  if (Test-Path -LiteralPath $sourceDirectory) { Copy-Item -LiteralPath $sourceDirectory -Destination $runtimeRoot -Recurse -Force }
}
foreach ($file in @('package.json','package-lock.json','tsconfig.json','next.config.ts','eslint.config.mjs','vitest.config.ts','webflow.json')) {
  Copy-Item -LiteralPath (Join-Path $sourceRoot $file) -Destination $runtimeRoot -Force
}
Write-Output "Preview source synchronized to $runtimeRoot"
