import {useState} from 'react';

export default function Header() {

    const [isFormShown,showForm] = useState(false);

    function createForm() {
        console.log(isFormShown);
        showForm(true);
    }

    return (
        <div class="container">
            <h2 class="logogroupomania">
                <img class="logo" src="./images/icon-above-font.png" alt=""/>
            </h2>

            <div class="barrederecherche">
                <i class="fas fa-search"></i>
                <input type="recherche" placeholder="Barre de recherche pour les utilisateurs"/>
            </div>

            <div class="creationpost">
                <label class="btn btn-primary" for="creerunpost">Créer</label>
                <div class="profil">
                    <img class="img" src="./images/julie.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

