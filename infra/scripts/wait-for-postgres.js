const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready", handleReturn);

  function handleReturn(_, stdout, stderr) {
    const output = (stdout + stderr).trim();

    if (!output.includes("accepting connections")) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres está pronto e aceitando conexões\n");
  }
}

process.stdout.write("🔴 Aguardando Postgres aceitar conexões ");
checkPostgres();
