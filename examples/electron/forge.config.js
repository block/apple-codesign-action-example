module.exports = {
  packagerConfig: {
    name: "ElectronExample",
    // Do not sign during packaging — the action handles signing.
    osxSign: false,
    osxNotarize: false,
  },
  makers: [
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
  ],
};
