import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiFileText,
  FiInbox,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import WriteButton from "./WriteButton";
import Button from "./Button";

const inlineIcon = "inline mr-1 mb-1";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
      <WriteButton icon={<FiEdit3 className={inlineIcon} />}>
        Escrever
      </WriteButton>
      <Button active icon={<FiInbox className={inlineIcon} />}>
        Caixa de Entrada
      </Button>
      <Button icon={<FiSend className={inlineIcon} />}>
        Enviados
      </Button>
      <Button icon={<FiFileText className={inlineIcon} />}>
        Rascunhos
      </Button>
      <Button icon={<FiArchive className={inlineIcon} />}>
        Arquivados
      </Button>
      <Button icon={<FiAlertOctagon className={inlineIcon} />}>
        Spam
      </Button>
      <Button icon={<FiTrash2 className={inlineIcon} />}>
        Lixeira
      </Button>
    </aside>
  );
}
