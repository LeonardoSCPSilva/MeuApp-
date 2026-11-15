const formCadastroArea = document.getElementById("formCadastroArea");
const mensagemCadastroArea = document.getElementById("mensagemCadastro");
const inputFotoArea = document.getElementById("fotoArea");
const containerPreviewFoto = document.getElementById("containerPreviewFoto");
const previewFotoArea = document.getElementById("previewFotoArea");
let urlPreviewFoto;

inputFotoArea.addEventListener("change", () => {
    const arquivo = inputFotoArea.files[0];

    if (urlPreviewFoto) {
        URL.revokeObjectURL(urlPreviewFoto);
        urlPreviewFoto = undefined;
    }

    if (!arquivo || !["image/jpeg", "image/png", "image/webp"].includes(arquivo.type)) {
        containerPreviewFoto.hidden = true;
        previewFotoArea.removeAttribute("src");
        return;
    }

    urlPreviewFoto = URL.createObjectURL(arquivo);
    previewFotoArea.src = urlPreviewFoto;
    containerPreviewFoto.hidden = false;
});

formCadastroArea.addEventListener("submit", (event) => {
    event.preventDefault();
    mensagemCadastroArea.textContent = "";

    const dadosFormulario = new FormData(formCadastroArea);
    const arquivoFoto = inputFotoArea.files[0];

    if (!arquivoFoto || !["image/jpeg", "image/png", "image/webp"].includes(arquivoFoto.type)) {
        mensagemCadastroArea.textContent = "Selecione uma foto JPG, PNG ou WEBP.";
        return;
    }

    if (arquivoFoto.size > 2 * 1024 * 1024) {
        mensagemCadastroArea.textContent = "A foto deve ter no máximo 2 MB.";
        return;
    }

    const leitor = new FileReader();
    leitor.onload = () => {
        const maiorId = areas.reduce(
            (maior, area) => Math.max(maior, Number(area.id) || 0),
            0
        );
        const horarioInicial = Number(dadosFormulario.get("horarioInicial"));
        const horarioFinal = Number(dadosFormulario.get("horarioFinal"));
        const nome = dadosFormulario.get("nome").trim();
        const regras = dadosFormulario.get("regras").trim();

        if (!nome || !regras) {
            mensagemCadastroArea.textContent = "Preencha o nome e as regras da área.";
            return;
        }

        if (horarioInicial >= horarioFinal) {
            mensagemCadastroArea.textContent =
                "O horário de fechamento deve ser posterior ao de abertura.";
            return;
        }

        const escapeHtml = (texto) => texto.replace(/[&<>"']/g, (caractere) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[caractere]);

        const novaArea = {
            id: maiorId + 1,
            nome: escapeHtml(nome),
            regras: `<p>${escapeHtml(regras).replace(/\r?\n/g, "<br>")}</p>`,
            horarioInicial: String(horarioInicial).padStart(2, "0"),
            horarioFinal: String(horarioFinal).padStart(2, "0"),
            imagem: leitor.result
        };

        try {
            areas.push(novaArea);
            localStorage.setItem("areas", JSON.stringify(areas));
            window.location.href = "areasComum.html";
        } catch (erro) {
            areas.pop();
            mensagemCadastroArea.textContent =
                "Não foi possível salvar a área. O armazenamento do navegador pode estar cheio.";
            console.error("Erro ao salvar área no armazenamento local:", erro);
        }
    };

    leitor.onerror = () => {
        mensagemCadastroArea.textContent = "Não foi possível ler a foto selecionada.";
    };

    leitor.readAsDataURL(arquivoFoto);
});
