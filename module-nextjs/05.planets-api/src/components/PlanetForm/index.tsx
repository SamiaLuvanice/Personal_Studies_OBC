'use client';

import { createPlanetAction } from '@/actions/planets-actions';
import styles from './styles.module.css';
import { useActionState } from 'react'; // Hypothetical hook for action state management

export function PlanetForm() {
  const [ state, action, pending ] = useActionState(createPlanetAction, {message: ''});

  return (
    <form action={action} className={styles.planetForm}>
      <p>
        {state?.message}
      </p>
      <div>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' id='name'  />
      </div>

      <div>
        <label htmlFor='description'>Descrição</label>
        <textarea name='description' id='description' ></textarea>
      </div>

      <div>
        <label htmlFor='imageUrl'>Imagem (URL)</label>
        <input type='text' name='imageUrl' id='imageUrl'  />
      </div>

      <div>
        <button type='submit' disabled={pending}>Adicionar Planeta</button>
      </div>
    </form>
  )
}