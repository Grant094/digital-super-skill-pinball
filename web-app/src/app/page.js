'use client'

import styles from './page.module.css'
import Table from './Table'
import DiceTray from './DiceTray';

export default function Home() {
  return (
    <div>
      <Table />
      <DiceTray />
    </div>
  );
}
