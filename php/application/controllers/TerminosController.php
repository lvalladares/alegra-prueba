<?php

class TerminosController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->viewRenderer->setNoRender(true);
        $this->terminos = new Application_Model_Terminos();
        $this->getResponse()->setHeader('Content-Type', 'application/json');
    }

    public function indexAction()
    {
        echo Zend_Json::encode($this->terminos->obtenerTerminos());
    }


}

