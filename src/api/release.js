import { useEffect } from "react";
import GITHUB_TOKEN from "/.env";
//==================================================//
// AP£I GitHub pour récupérer les déploiements =====//
//==================================================//
const fetchDeploy = async () => {
    const response = await fetch('https://api.github.com/repos/nephcode/youcodeuse/deployments', {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });

    const data = await response.json();
    console.log(data); // Ici tu peux accéder à "ref" ou autres informations du déploiement
};
export const useFetchDeploy = () => {
    useEffect(() => {
        fetchDeploy();
    }, []);
};

///>>> A debugger pour voir si ça fonctionne bien 
//==================================================//