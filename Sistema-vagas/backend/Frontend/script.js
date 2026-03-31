const API = 'http://localhost:3000/jobs';

// 🔄 CARREGAR VAGAS
async function loadJobs() {
    const res = await fetch(API);
    const jobs = await res.json();

    const list = document.getElementById('jobList');
    list.innerHTML = '';

    jobs.forEach(job => {
        const li = document.createElement('li');

        li.innerHTML = `
      <span>${job.title} - ${job.company}</span>
      <button onclick="deleteJob(${job.id})">❌</button>
    `;

        list.appendChild(li);
    });
}
// ➕ ADICIONAR VAGA
async function addJob() {
    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;

    if (!title || !company) {
        alert('Preencha todos os campos');
        return;
    }

    await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, company })
    });

    loadJobs();
}
// ❌ DELETAR VAGA
async function deleteJob(id) {
    await fetch(`${API}/${id}`, {
        method: 'DELETE'
    });

    loadJobs();
}

loadJobs();