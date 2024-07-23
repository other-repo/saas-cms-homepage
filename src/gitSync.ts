import simpleGit from 'simple-git';

const git = simpleGit();

export async function syncRepository(repoUrl: string, localPath: string) {
  if (!fs.existsSync(localPath)) {
    await git.clone(repoUrl, localPath);
  } else {
    await git.cwd(localPath).pull();
  }
}
