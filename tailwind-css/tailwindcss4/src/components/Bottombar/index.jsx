//verifique se o codigo faz sentido

import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiMenu,
  FiTrash2,
} from "react-icons/fi";
import Button from "./Button";
import { useState } from "react";

const inlineIcon = "inline mb-1 sm:mr-2";
const smOnlyText = "hidden sm:inline";

export default function Bottombar() {
  const { isMenuOpen, setIsMenuOpen } = useState(false);

  return (
    <div className="w-full flex gap-2 items-center relative md:hidden border-t-2 border-gray-200 pt-2 pb-4 px-2">
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Escrever</span>
      </Button>
      <Button active>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Caixa de Entrada</span>
      </Button>
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Rascunhos</span>
      </Button>
      <Button onClick={() => setIsMenuOpen((state) => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Fechar</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>Mais</span>
          </>
        )}
      </Button>
      <div
        className={`
            ${isMenuOpen ? "absolute" : "hidden"}
            right-0 bottom-12 flex flex-col gap-2 w-40`}
      >
        <Button>
          <FiArchive className="inline mr-3 mb-1" />
          Arquivados
        </Button>
        <Button>
          <FiAlertOctagon className="inline mr-3 mb-1" />
          Spam
        </Button>
        <Button>
          <FiTrash2 className="inline mr-3 mb-1" />
          Lixeira
        </Button>
      </div>
    </div>
  );
}
