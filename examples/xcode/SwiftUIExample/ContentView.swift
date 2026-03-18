import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 16) {
            Image(systemName: "signature")
                .font(.system(size: 48))
            Text("apple-codesign-action")
                .font(.title)
            Text("Minimal SwiftUI app for end-to-end signing tests.")
                .foregroundStyle(.secondary)
        }
        .padding()
    }
}
