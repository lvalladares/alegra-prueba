<?php

class VendedoresController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->viewRenderer->setNoRender(true);
        $this->vendedores = new Application_Model_Vendedores();
        $this->getResponse()->setHeader('Content-Type', 'application/json');
    }

    public function indexAction()
    {
        echo Zend_Json::encode($this->vendedores->obtenerVendedores());
    }


}

