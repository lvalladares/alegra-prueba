<?php

class ContactosController extends Zend_Controller_Action
{

    public function init()
    {
        $this->_helper->viewRenderer->setNoRender(true);
        $this->contactos = new Application_Model_Contactos();
        $this->getResponse()->setHeader('Content-Type', 'application/json');
    }

    public function indexAction()
    {
        echo Zend_Json::encode($this->contactos->obtenerContactos());
    }

    public function getAction()
    {
        $id = $this->_getParam('id');
        echo Zend_Json::encode($this->contactos->obtenerUnContacto($id));
    }

    public function postAction()
    {
        $postParams = Zend_Json::decode($this->getRequest()->getRawBody());

        $respuesta = $this->contactos->nuevoContacto($postParams);
        echo Zend_Json::encode($respuesta);
    }

    public function putAction()
    {
        $putParams = Zend_Json::decode($this->getRequest()->getRawBody());

        $respuesta = $this->contactos->editarContacto($putParams);
        echo Zend_Json::encode($respuesta);
    }

    public function deleteAction()
    {
        $deleteParams = Zend_Json::decode($this->getRequest()->getRawBody());

        echo Zend_Json::encode($this->contactos->eliminarUnContacto($deleteParams));
    }


}









