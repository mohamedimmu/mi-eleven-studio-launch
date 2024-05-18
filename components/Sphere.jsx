"use client";

import Spline from '@splinetool/react-spline';

export default function Sphere() {
  function onLoad(spline) {
    spline.setZoom(1);
  }
  return (
    <div className='h-3/4'>
      <Spline onLoad={onLoad} setZoom scene="https://prod.spline.design/vUaQXYTHatxvxjXG/scene.splinecode" />
    </div>
  );
}

