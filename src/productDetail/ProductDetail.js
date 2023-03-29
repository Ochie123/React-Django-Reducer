import { useEffect, useState, useCallback } from "react";

import { Detail }  from '../product'

const React = require('react')

export default function ProductDetail() {
  return (
    <div className="pt-3">
      <div className="page-width">
        <h3 className="mt-3 mb-3 text-center uppercase h5 tracking-widest">Featured collection</h3>
        <Detail />
      </div>
    </div>
  );
}