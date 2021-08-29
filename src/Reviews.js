import React from 'react';
import { useParams } from 'react-router-dom';
export default function Reviews() {
  let param = useParams();

  return <div>Reviews section for {param.id}</div>;
}
