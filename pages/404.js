'use client';

import { useEffect } from "react";

import EmptyState from "../app/components/EmptyState";



const ErrorState = () => {
  

  return ( 
    <EmptyState
      title="This Page does not exist"
    />
   );
}
 
export default ErrorState;
