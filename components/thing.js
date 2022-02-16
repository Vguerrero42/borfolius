import {useState,useEffect,useRef,useCallback} from 'react'
import {Box,Spinner} from '@chakra-ui/react'
import * as THREE from 'three'
import {OribitControls} from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

function easeOutCirc(x){
  return Math.sqrt(1-Math.pow(x-1,4))
}

const Thing = ()=>{
  const refContainer = useRef()

  return (
    <Box ref={refContainer}>
      That thang
    </Box>
  )
}

export default Thing