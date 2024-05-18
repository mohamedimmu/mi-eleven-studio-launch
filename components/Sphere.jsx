"use client";

import Spline from '@splinetool/react-spline';

export default function Sphere() {
  return (
    <div className='h-screen absolute -top-2 left-0 right-0 -z-10'>
      <Spline scene="https://prod.spline.design/vUaQXYTHatxvxjXG/scene.splinecode" />
    </div>
  );
}

