namespace :build do
  desc 'Build client assets'
  task :client do
    on roles(:app) do
      within fetch(:release_path) do
        execute(:npm, :run, 'production-build-client')
        execute(:ln, '-sf', 'build/assets', 'public/assets')
      end
    end
  end

  desc 'Build server assets'
  task :server do
    on roles(:app) do
      within fetch(:release_path) do
        execute(:npm, :run, 'production-build-server')
      end
    end
  end

  desc 'Build server assets'
  task :all do
    invoke 'build:client'
    invoke 'build:server'
  end

  after 'deploy:updated', 'build:all'
end
