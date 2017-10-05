<?php

class PreciosController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->viewRenderer->setNoRender(true);
        $this->precios = new Application_Model_Precios();
        $this->getResponse()->setHeader('Content-Type', 'application/json');
    }

    public function indexAction()
    {
        echo Zend_Json::encode($this->precios->obtenerPrecios());
    }


}

